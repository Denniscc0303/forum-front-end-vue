<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">人氣餐廳</h1>

    <hr />
    <div class="card mb-3" style="max-width: 540px; margin: auto">
      <div
        v-for="restaurant in restaurants"
        :key="restaurant.id"
        class="row no-gutters"
      >
        <div class="col-md-4">
          <a href="#">
            <img class="card-img" :src="restaurant.image" />
          </a>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">
              {{ restaurant.name }}
            </h5>
            <span class="badge badge-secondary"
              >收藏數：{{ restaurant.FavoriteCount }}</span
            >
            <p class="card-text">
              {{ restaurant.description }}
            </p>
            <a href="#" class="btn btn-primary mr-2">Show</a>

            <button
              v-if="restaurant.isFavorited"
              type="button"
              class="btn btn-danger mr-2"
            >
              移除最愛
            </button>
            <button v-else type="button" class="btn btn-primary">
              加到最愛
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import NavTabs from "./../components/NavTabs";
const dummyData = {
  restaurants: [
    {
      id: 9,
      name: "Celine Emard",
      tel: "086-920-8919 x545",
      address: "0572 Nayeli Parks",
      opening_hours: "08:00",
      description: "Voluptatem rerum expedita. Illum id illum architec",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=11.241151674478257",
      viewCounts: 18,
      createdAt: "2021-03-08T12:49:12.000Z",
      updatedAt: "2021-03-25T13:27:15.000Z",
      CategoryId: 2,
      FavoritedUsers: [
        {
          id: 2,
          name: "user1",
          email: "user1@example.com",
          password:
            "$2a$10$xvrI2amUsnW9nxZjtQEyhemxqvFrRME0wtJNiAQhrGA8k90OlvYxS",
          isAdmin: true,
          image: null,
          createdAt: "2021-03-08T12:49:12.000Z",
          updatedAt: "2021-04-01T15:29:07.000Z",
          Favorite: {
            UserId: 2,
            RestaurantId: 9,
            createdAt: "2021-03-19T15:35:41.000Z",
            updatedAt: "2021-03-19T15:35:41.000Z",
          },
        },
        {
          id: 37,
          name: "陳韋翰",
          email: "wsxqaz12322@gmail.com",
          password:
            "$2a$10$kgmF7USTWAjsy9h3vIeV8uzg1wDKRuNG0f2TFSkVZbZX7bNv.x4Km",
          isAdmin: false,
          image: null,
          createdAt: "2021-03-22T09:19:06.000Z",
          updatedAt: "2021-03-22T09:19:06.000Z",
          Favorite: {
            UserId: 37,
            RestaurantId: 9,
            createdAt: "2021-03-22T09:21:02.000Z",
            updatedAt: "2021-03-22T09:21:02.000Z",
          },
        },
      ],
      isFavorited: false,
      FavoriteCount: 2,
    },
    {
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
      FavoritedUsers: [
        {
          id: 37,
          name: "陳韋翰",
          email: "wsxqaz12322@gmail.com",
          password:
            "$2a$10$kgmF7USTWAjsy9h3vIeV8uzg1wDKRuNG0f2TFSkVZbZX7bNv.x4Km",
          isAdmin: false,
          image: null,
          createdAt: "2021-03-22T09:19:06.000Z",
          updatedAt: "2021-03-22T09:19:06.000Z",
          Favorite: {
            UserId: 37,
            RestaurantId: 2,
            createdAt: "2021-03-22T09:20:34.000Z",
            updatedAt: "2021-03-22T09:20:34.000Z",
          },
        },
        {
          id: 1,
          name: "root",
          email: "root@example.com",
          password:
            "$2a$10$vBDtcMJIvK7NxWsFzzS10.PGTJwTPCoiTVeU6ZLxXemXuiyCyA9jy",
          isAdmin: true,
          image: "https://i.imgur.com/RwTSR6Q.jpeg",
          createdAt: "2021-03-08T12:49:12.000Z",
          updatedAt: "2021-03-19T17:09:57.000Z",
          Favorite: {
            UserId: 1,
            RestaurantId: 2,
            createdAt: "2021-03-31T08:25:37.000Z",
            updatedAt: "2021-03-31T08:25:37.000Z",
          },
        },
      ],
      isFavorited: true,
      FavoriteCount: 2,
    },
    {
      id: 5,
      name: "Jacklyn Zboncak",
      tel: "467.187.2522",
      address: "91082 Narciso Summit",
      opening_hours: "08:00",
      description: "Est nulla ut voluptas placeat. Aperiam incidunt au",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=56.561828198471574",
      viewCounts: 13,
      createdAt: "2021-03-08T12:49:12.000Z",
      updatedAt: "2021-03-25T13:15:01.000Z",
      CategoryId: 2,
      FavoritedUsers: [
        {
          id: 1,
          name: "root",
          email: "root@example.com",
          password:
            "$2a$10$vBDtcMJIvK7NxWsFzzS10.PGTJwTPCoiTVeU6ZLxXemXuiyCyA9jy",
          isAdmin: true,
          image: "https://i.imgur.com/RwTSR6Q.jpeg",
          createdAt: "2021-03-08T12:49:12.000Z",
          updatedAt: "2021-03-19T17:09:57.000Z",
          Favorite: {
            UserId: 1,
            RestaurantId: 5,
            createdAt: "2021-03-15T08:25:23.000Z",
            updatedAt: "2021-03-15T08:25:23.000Z",
          },
        },
      ],
      isFavorited: true,
      FavoriteCount: 1,
    },
    {
      id: 49,
      name: "COmida japonessaaaaaaa",
      tel: "073.403.6582",
      address: "633 Hahn Mountain",
      opening_hours: "08:00",
      description: "Debitis sint voluptatem nobis eaque temporibus qui",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=67.92778757780937",
      viewCounts: 2,
      createdAt: "2021-03-08T12:49:12.000Z",
      updatedAt: "2021-03-31T14:45:46.000Z",
      CategoryId: 4,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 48,
      name: "Kaitlin Johnston II",
      tel: "103.302.0448 x034",
      address: "493 Emanuel Mews",
      opening_hours: "08:00",
      description: "sed placeat labore",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=81.51122997290389",
      viewCounts: 1,
      createdAt: "2021-03-08T12:49:12.000Z",
      updatedAt: "2021-04-01T06:13:22.000Z",
      CategoryId: 4,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 47,
      name: "Henri Mertz",
      tel: "705.463.9863 x1090",
      address: "5663 Deanna Junction",
      opening_hours: "08:00",
      description: "nostrum",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=4.940019122310857",
      viewCounts: 0,
      createdAt: "2021-03-08T12:49:12.000Z",
      updatedAt: "2021-03-08T12:49:12.000Z",
      CategoryId: 2,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 46,
      name: "Zelma Kautzer",
      tel: "812.956.0760 x1389",
      address: "678 Nella Union",
      opening_hours: "08:00",
      description: "Nisi distinctio ut ut accusantium qui quisquam neq",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=38.33118409376759",
      viewCounts: 1,
      createdAt: "2021-03-08T12:49:12.000Z",
      updatedAt: "2021-04-01T06:13:31.000Z",
      CategoryId: 4,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 45,
      name: "Mrs. Kelsi Kunze",
      tel: "(302) 116-6885 x75643",
      address: "809 Hickle Burgs",
      opening_hours: "08:00",
      description: "Sint voluptas et qui doloremque alias facere. Aut ",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=48.20055388780953",
      viewCounts: 0,
      createdAt: "2021-03-08T12:49:12.000Z",
      updatedAt: "2021-03-08T12:49:12.000Z",
      CategoryId: 5,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 44,
      name: "Jessyca Rodriguez",
      tel: "695.023.6343",
      address: "3399 Schaden Ridges",
      opening_hours: "08:00",
      description: "facilis",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=82.82003445958811",
      viewCounts: 0,
      createdAt: "2021-03-08T12:49:12.000Z",
      updatedAt: "2021-03-08T12:49:12.000Z",
      CategoryId: 1,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 43,
      name: "Carmella Stehr",
      tel: "654.715.3067 x7566",
      address: "9335 Torphy Brooks",
      opening_hours: "08:00",
      description: "Inventore tempore adipisci.\nDoloribus commodi nost",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=54.45327744820507",
      viewCounts: 0,
      createdAt: "2021-03-08T12:49:12.000Z",
      updatedAt: "2021-03-08T12:49:12.000Z",
      CategoryId: 2,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
  ],
};
export default {
  components: {
    NavTabs,
  },
  data() {
    return {
      restaurants: [],
    };
  },
  created() {
    this.fetchTopRestaurants();
  },
  methods: {
    fetchTopRestaurants() {
      this.restaurants = dummyData.restaurants;
    },
  },
};
</script>