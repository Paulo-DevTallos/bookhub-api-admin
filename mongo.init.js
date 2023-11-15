// eslint-disable-next-line no-undef
db.createUser({
  roles: [
    {
      role: "readWrtie",
      db: "bookhub-admin",
    },
  ],
});
