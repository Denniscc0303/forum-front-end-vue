<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">美食達人</h1>
    <hr />
    <div class="row text-center">
      <div v-for="user in users" :key="user.id" class="col-3">
        <a href="#">
          <img :src="user.image" width="140px" height="140px" />
        </a>
        <h2>{{ user.name }}</h2>
        <span class="badge badge-secondary"
          >追蹤人數：{{ user.FollowerCount }}</span
        >
        <p class="mt-3">
          <button v-if="user.isFollowed" type="button" class="btn btn-danger">
            取消追蹤
          </button>
          <button v-else type="button" class="btn btn-primary">追蹤</button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from "./../components/NavTabs";
const dummyData = {
  users: [
    {
      id: 2,
      name: "user1",
      email: "user1@example.com",
      password: "$2a$10$xvrI2amUsnW9nxZjtQEyhemxqvFrRME0wtJNiAQhrGA8k90OlvYxS",
      isAdmin: true,
      image: null,
      createdAt: "2021-03-08T12:49:12.000Z",
      updatedAt: "2021-04-01T15:29:07.000Z",
      Followers: [
        {
          id: 7,
          name: "myUser",
          email: "myUser@resume.com",
          password:
            "$2a$10$97t.DnI9gxW7Uex7dqfhoeiVd2T5oytu38Fsw4Siaui6fya.uJmsy",
          isAdmin: false,
          image: "https://i.imgur.com/PrC0DDJ.png",
          createdAt: "2021-03-08T15:00:26.000Z",
          updatedAt: "2021-03-23T16:33:12.000Z",
          Followship: {
            followerId: 7,
            followingId: 2,
            createdAt: "2021-03-08T16:06:06.000Z",
            updatedAt: "2021-03-08T16:06:06.000Z",
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
          Followship: {
            followerId: 1,
            followingId: 2,
            createdAt: "2021-03-31T10:46:35.000Z",
            updatedAt: "2021-03-31T10:46:35.000Z",
          },
        },
      ],
      FollowerCount: 2,
      isFollowed: true,
    },
    {
      id: 1,
      name: "root",
      email: "root@example.com",
      password: "$2a$10$vBDtcMJIvK7NxWsFzzS10.PGTJwTPCoiTVeU6ZLxXemXuiyCyA9jy",
      isAdmin: true,
      image: "https://i.imgur.com/RwTSR6Q.jpeg",
      createdAt: "2021-03-08T12:49:12.000Z",
      updatedAt: "2021-03-19T17:09:57.000Z",
      Followers: [
        {
          id: 7,
          name: "myUser",
          email: "myUser@resume.com",
          password:
            "$2a$10$97t.DnI9gxW7Uex7dqfhoeiVd2T5oytu38Fsw4Siaui6fya.uJmsy",
          isAdmin: false,
          image: "https://i.imgur.com/PrC0DDJ.png",
          createdAt: "2021-03-08T15:00:26.000Z",
          updatedAt: "2021-03-23T16:33:12.000Z",
          Followship: {
            followerId: 7,
            followingId: 1,
            createdAt: "2021-03-08T16:06:03.000Z",
            updatedAt: "2021-03-08T16:06:03.000Z",
          },
        },
      ],
      FollowerCount: 1,
      isFollowed: false,
    },
    {
      id: 27,
      name: "CTL",
      email: "liveWi@yahoo.com.tw",
      password: "$2a$10$9r.P4uxIoepd8PDpppNmZeUeclqxh3Mc8m132kSlUVw7PxUVMrFMu",
      isAdmin: false,
      image: null,
      createdAt: "2021-03-16T05:16:09.000Z",
      updatedAt: "2021-03-16T05:16:09.000Z",
      Followers: [
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
          Followship: {
            followerId: 1,
            followingId: 27,
            createdAt: "2021-03-24T03:20:04.000Z",
            updatedAt: "2021-03-24T03:20:04.000Z",
          },
        },
      ],
      FollowerCount: 1,
      isFollowed: true,
    },
    {
      id: 3,
      name: "user2",
      email: "user2@example.com",
      password: "$2a$10$EAEKdlt07QYD9qDEDB7dq.9GMnGYQQ16r3f4GIeM2yUlkimr/LheC",
      isAdmin: true,
      image: null,
      createdAt: "2021-03-08T12:49:12.000Z",
      updatedAt: "2021-04-01T15:30:11.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
    {
      id: 7,
      name: "myUser",
      email: "myUser@resume.com",
      password: "$2a$10$97t.DnI9gxW7Uex7dqfhoeiVd2T5oytu38Fsw4Siaui6fya.uJmsy",
      isAdmin: false,
      image: "https://i.imgur.com/PrC0DDJ.png",
      createdAt: "2021-03-08T15:00:26.000Z",
      updatedAt: "2021-03-23T16:33:12.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
    {
      id: 17,
      name: "test",
      email: "test@example.com",
      password: "$2a$10$oFtjmckTF7xGi5mcVlTuZuBGipfDtSn6L/hRpbw5kEEuJtN2F7wJe",
      isAdmin: false,
      image: null,
      createdAt: "2021-03-10T08:22:55.000Z",
      updatedAt: "2021-03-10T08:22:55.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
    {
      id: 37,
      name: "陳韋翰",
      email: "wsxqaz12322@gmail.com",
      password: "$2a$10$kgmF7USTWAjsy9h3vIeV8uzg1wDKRuNG0f2TFSkVZbZX7bNv.x4Km",
      isAdmin: false,
      image: null,
      createdAt: "2021-03-22T09:19:06.000Z",
      updatedAt: "2021-03-22T09:19:06.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
    {
      id: 47,
      name: "test",
      email: "test2@example.com",
      password: "$2a$10$yQmX0wNzteeG9SGbyrLXOuULrzaDylMJfZ3kERgHZoq8U0z25hvBW",
      isAdmin: false,
      image: null,
      createdAt: "2021-03-31T15:19:09.000Z",
      updatedAt: "2021-03-31T15:19:09.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
  ],
};
export default {
  components: {
    NavTabs,
  },
  data() {
    return {
      users: [],
    };
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    fetchUsers() {
      this.users = dummyData.users;
    },
  },
};
</script>