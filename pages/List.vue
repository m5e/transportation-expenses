<template>
  <section class="list-container">
    <div>
      <table
        class="table is-bordered table is-striped is-narrow is-hoverable is-fullwidth"
      >
        <tbody>
          <th>申請日時</th>
          <th>申請内容</th>
          <tr v-for="list in requestLists" :key="list.id">
            <td>{{ list.requestDate }}</td>
            <td>
              <button class="button detail-button" @click="showDetail(list.id)">
                詳細
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <div class="modal" :class="{ 'is-active': isModalActive }">
        <div class="modal-background"></div>
        <div class="modal-card">
          <header class="modal-card-head">
            <p class="modal-card-title">申請内容の詳細</p>
            <button
              class="delete"
              aria-label="close"
              @click="switchDisplayModal"
            ></button>
          </header>
          <section class="modal-card-body">
            申請内容は下記のとおりです
            <ul v-for="detail in requestDetail" :key="detail.id">
              <li>日付 ：{{ detail.requestDate }}</li>
              <li>業務内容・行先：{{ detail.content }}</li>
              <li>乗り物 ：{{ detail.vehicle }}</li>
              <li>出発地点 ：{{ detail.startPoint }}</li>
              <li v-if="detail.relayPoint !== ''">
                中継地点 ：{{ detail.relayPoint }}
              </li>
              <li>到着地点 ：{{ detail.goalPoint }}</li>
              <li>請求先 ：{{ detail.request }}</li>
              <li>片道・往復 ：{{ detail.ways }}</li>
              <li>合計金額 ：{{ detail.price }}円</li>
            </ul>
          </section>
          <footer class="modal-card-foot">
            <button class="button" @click="switchDisplayModal">戻る</button>
          </footer>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      requestLists: [],
      requestDetail: [],
      defaultLists: [
        {
          id: 1,
          requestDate: "2020/4/1",
          content: "面談",
          vehicle: "電車",
          startPoint: "横浜",
          relayPoint: "田端",
          goalPoint: "五反田",
          request: "自社",
          ways: "片道",
          price: 460
        },
        {
          id: 2,
          requestDate: "2020/4/3",
          content: "打ち合わせ",
          vehicle: "電車",
          startPoint: "東京",
          relayPoint: "",
          goalPoint: "品川",
          request: "自社",
          ways: "片道",
          price: 200
        },
        {
          id: 3,
          requestDate: "2020/4/5",
          content: "打ち合わせ",
          vehicle: "電車",
          startPoint: "東京",
          relayPoint: "",
          goalPoint: "千葉",
          request: "自社",
          ways: "片道",
          price: 660
        },
        {
          id: 4,
          requestDate: "2020/4/7",
          content: "会議",
          vehicle: "電車",
          startPoint: "横浜",
          relayPoint: "",
          goalPoint: "みなとみらい",
          request: "自社",
          ways: "片道",
          price: 600
        }
      ],
      isModalActive: false
    };
  },
  mounted() {
    this.initialDisplayOfList();
  },
  methods: {
    initialDisplayOfList() {
      const parsedSessionStorageData = JSON.parse(
        sessionStorage.getItem("requestData")
      );
      this.requestLists =
        parsedSessionStorageData && parsedSessionStorageData.length !== null
          ? parsedSessionStorageData
          : this.defaultLists;
    },

    showDetail(targetId) {
      this.isModalActive = true;

      this.requestDetail = this.requestLists.filter(
        list => list.id === targetId
      );
    },

    switchDisplayModal() {
      this.isModalActive = !this.isModalActive;
    }
  }
};
</script>

<style scoped>
.list-container {
  width: 90%;
  margin-right: auto;
  margin-left: auto;
  padding-top: 15%;
  padding-bottom: 100%;
}

table {
  text-align-last: center;
}

table.is-striped.is-narrow.is-hoverable.is-fullwidth tbody tr:hover {
  background-color: hsl(173, 76%, 87%);
}

.detail-button {
  width: 60%;
}
</style>
