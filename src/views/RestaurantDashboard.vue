<template>
  <div class="container py-5">
    <div>
      <h1>{{ restaurant.name }}</h1>
      <span class="badge badge-secondary mt-1 mb-3">
        {{ restaurant.Category.name }}
      </span>
    </div>

    <hr />

    <ul>
      <li>評論數： {{ restaurant.Comments.length }}</li>
      <li>瀏覽次數： {{ restaurant.viewCounts }}</li>
    </ul>

    <button type="button" class="btn btn-link" @click="$router.back()">
      回上一頁
    </button>
  </div>
</template>

<script>
const dummyData = {
  restaurant: {
    id: 2,
    name: "Kali Swift",
    tel: "565.517.9558",
    address: "64851 Destin Coves",
    opening_hours: "08:00",
    description: "aut",
    image:
      "https://loremflickr.com/320/240/restaurant,food/?random=48.772796055085756",
    viewCounts: 78,
    createdAt: "2021-03-08T12:49:12.000Z",
    updatedAt: "2021-04-01T16:26:43.000Z",
    CategoryId: 5,
    Category: {
      id: 5,
      name: "素食料理",
      createdAt: "2021-03-08T12:49:12.000Z",
      updatedAt: "2021-03-08T12:49:12.000Z",
    },
    Comments: [
      {
        id: 2,
        text: "Cumque sed nisi dolores.",
        UserId: 3,
        RestaurantId: 2,
        createdAt: "2021-03-08T12:49:12.000Z",
        updatedAt: "2021-03-08T12:49:12.000Z",
        User: {
          id: 3,
          name: "user2",
          email: "user2@example.com",
          password:
            "$2a$10$EAEKdlt07QYD9qDEDB7dq.9GMnGYQQ16r3f4GIeM2yUlkimr/LheC",
          isAdmin: true,
          image: null,
          createdAt: "2021-03-08T12:49:12.000Z",
          updatedAt: "2021-04-01T15:30:11.000Z",
        },
      },
    ],
  },
};
export default {
  name: "RestaurantDashboard",
  data() {
    return {
      restaurant: {},
    };
  },
  created() {
    this.fetchRestaurant();
  },
  methods: {
    fetchRestaurant() {
      this.restaurant = dummyData.restaurant;
    },
  },
};
</script>