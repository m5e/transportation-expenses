<template>
  <section class="request-container">
    <div>
      <label class="label">日付</label>
      <date-picker
        :format="datePickerFormat"
        :class="{ 'is-danger': date === '' }"
        v-model="date"
      />
      <span v-if="date === ''" :style="{ color: 'red' }"
        >日付を設定してください</span
      >
      <label class="label">業務内容・行先</label>
      <textarea
        class="textarea"
        :class="{ 'is-danger': content === '' }"
        v-model="content"
      />
      <span v-if="content === ''" :style="{ color: 'red' }"
        >業務内容もしくは目的地を入力してください</span
      >
      <label class="label">乗り物</label>
      <select class="select" v-model="vehicle">
        <option>電車</option>
        <option>バス</option>
        <option>タクシー</option>
        <option>新幹線</option>
      </select>
      <label class="label">出発地点</label>
      <textarea
        class="textarea"
        :class="{ 'is-danger': startPoint === '' }"
        v-model="startPoint"
      />
      <span v-if="startPoint === ''" :style="{ color: 'red' }"
        >出発地点を入力して下さい</span
      >
      <div :style="{ marginTop: '10%' }">
        <button class="button is-primary" @click="refreshhDisplayRelayPoint">
          {{
            !isDisplayRelayPoint ? "中継地点を追加する" : "中継地点を削除する"
          }}
        </button>
      </div>
      <div v-if="isDisplayRelayPoint">
        <label class="label">中継地点</label>
        <textarea
          class="textarea"
          :class="{ 'is-danger': relayPoint === '' }"
          v-model="relayPoint"
        />
        <span v-if="relayPoint === ''" :style="{ color: 'red' }"
          >中継地点を入力して下さい</span
        >
      </div>
      <label class="label">到着地点</label>
      <textarea
        class="textarea"
        :class="{ 'is-danger': goalPoint === '' }"
        v-model="goalPoint"
      />
      <span v-if="goalPoint === ''" :style="{ color: 'red' }"
        >到着地点を入力して下さい</span
      >
      <label class="label">請求先</label>
      <select class="select" v-model="request">
        <option>客先</option>
        <option>自社</option>
      </select>
      <label class="label">金額</label>
      <input
        type="number"
        class="input"
        :class="{ 'is-danger': (price <= 0) | (price === '') }"
        v-model="price"
      />
      <span v-if="price <= 0 || price === ''" :style="{ color: 'red' }"
        >0 円以上で入力してください</span
      >
      <div class="field is-grouped">
        <p class="control">
          <a
            class="button is-primary request-button"
            @click="switchDisplayModal"
            >申請</a
          >
        </p>
      </div>

      <div class="modal" :class="{ 'is-active': isModalActive }">
        <div class="modal-background"></div>
        <div class="modal-card">
          <header class="modal-card-head">
            <p class="modal-card-title">申請確認</p>
            <button
              class="delete"
              aria-label="close"
              @click="switchDisplayModal"
            ></button>
          </header>
          <section class="modal-card-body">
            下記内容で申請してもよろしいでしょうか？
            <li>日付：{{ requestDate }}</li>
            <li>業務内容・行先：{{ content }}</li>
            <li>乗り物：{{ vehicle }}</li>
            <li>出発地点：{{ startPoint }}</li>
            <li>中継地点：{{ relayPoint }}</li>
            <li>到着地点：{{ goalPoint }}</li>
            <li>請求先：{{ request }}</li>
            <li>片道・往復：{{ ways }}</li>
            <li>金額：{{ price }} 円</li>
          </section>
          <footer class="modal-card-foot">
            <button class="button" @click="switchDisplayModal">戻る</button>
            <button class="button is-primary" @click="onClickApplyButton">
              決定
            </button>
          </footer>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import DatePicker from "vuejs-datepicker/src/components/Datepicker.vue";

export default {
  components: { DatePicker },
  data() {
    return {
      selected: "交通費申請",
      menuLists: ["交通費申請", "申請一覧"],
      isModalActive: false,
      date: "", // 申請画面表示用の日付を格納する変数
      requestDate: "",
      vehicle: "電車",
      startPoint: "",
      relayPoint: "",
      goalPoint: "",
      request: "自社",
      ways: "往復",
      price: 0,
      content: "",
      isDisplayRelayPoint: false,
      requestData: [],
      datePickerFormat: "yyyy/MM/dd" // date-picker のフォーマット
    };
  },
  mounted() {},
  methods: {
    /** Switching the modal display state */
    switchDisplayModal() {
      this.isModalActive = !this.isModalActive;

      if (this.date !== "") {
        const date = new Date(this.date);
        this.requestDate = `${date.getFullYear()}/${date.getMonth() +
          1}/${date.getDate()}`;
      }
    },

    /** Switching the display of relay point items */
    refreshhDisplayRelayPoint() {
      this.isDisplayRelayPoint = !this.isDisplayRelayPoint;
    },

    onClickApplyButton() {
      this.isModalActive = false;

      if (
        this.content === "" ||
        this.requestDate === "" ||
        this.startPoint === "" ||
        (this.isDisplayRelayPoint && this.relayPoint === "") ||
        this.goalPoint === "" ||
        this.price <= 0
      ) {
        this.$toast.error("未入力の項目があります").goAway(1300);
        return;
      }

      const parsedSessionStorageData = JSON.parse(
        sessionStorage.getItem("requestData")
      );
      if (
        parsedSessionStorageData &&
        parsedSessionStorageData.length !== null
      ) {
        this.requestData = parsedSessionStorageData;
      }

      this.requestData.push({
        id: Math.random(),
        requestDate: this.requestDate,
        vehicle: this.vehicle,
        startPoint: this.startPoint,
        relayPoint: this.relayPoint,
        goalPoint: this.goalPoint,
        request: this.request,
        ways: this.ways,
        price: this.price,
        content: this.content
      });

      sessionStorage.setItem("requestData", JSON.stringify(this.requestData));

      this.$toast.success("申請が完了しました").goAway(2000);
    }
  }
};
</script>

<style scoped>
select {
  width: 100%;
}
.request-container {
  width: 80%;
  margin-right: auto;
  margin-left: auto;
}
.request-button {
  margin: 55% 0% 25% 0%;
  width: 200%;
}
/** mobile */
@media screen and (max-width: 1024px) {
  .modal-card {
    width: 80%;
    margin: 0% 10% 10% 0%;
  }
}
/** PC */
@media screen and (min-width: 1025px) {
  .modal-card {
    width: 80%;
    margin: 0% 10% 10% 10%;
  }
}
</style>
