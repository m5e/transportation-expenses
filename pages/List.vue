<template>
  <section class="container">
    <div>
      <table
        class="table is-bordered table is-striped is-narrow is-hoverable is-fullwidth"
      >
        <tbody>
          <th>申請日時</th>
          <th>ステータス</th>
          <th>申請内容</th>
          <tr v-for="list in requestLists" :key="list.id">
            <td>{{ list.date }}</td>
            <td>{{ list.status }}</td>
            <td>
              <button class="button" @click="showDetail(list.id)">詳細</button>
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
              <li>日付：{{ detail.date }}</li>
              <li>業務内容・行先：{{ detail.location }}</li>
              <li>乗り物：{{ detail.vehicle }}</li>
              <li>発～ ( 経由 ) ～着：{{ detail.route }}</li>
              <li>請求先：{{ detail.request }}</li>
              <li>片道・往復：{{ detail.ways }}</li>
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
      requestLists: [
        {
          id: 1,
          date: "2020/4/1",
          status: "課長まで承認済み",
          location: "五反田",
          vehicle: "電車",
          route: "横浜 ~ 五反田",
          request: "自社",
          ways: "片道"
        },
        {
          id: 2,
          date: "2020/4/3",
          status: "申請中",
          location: "品川",
          vehicle: "電車",
          route: "高田馬場 ~ 品川",
          request: "客先",
          ways: "往復"
        },
        {
          id: 3,
          date: "2020/4/3",
          status: "申請中",
          location: "品川",
          vehicle: "電車",
          route: "高田馬場 ~ 品川",
          request: "客先",
          ways: "往復"
        },
        {
          id: 4,
          date: "2020/4/3",
          status: "申請中",
          location: "品川",
          vehicle: "電車",
          route: "高田馬場 ~ 品川",
          request: "客先",
          ways: "往復"
        }
      ],
      requestDetail: [],
      isModalActive: false
    };
  },
  mounted() {},
  methods: {
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
table {
  text-align-last: center;
  margin: 15% 0% 0% 0%;
}
</style>
