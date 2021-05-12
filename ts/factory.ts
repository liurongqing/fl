const UserFactory = function (role) {
  function User(opt) {
    this.name = opt.name;
    this.viewPage = opt.viewPage;
  }

  switch (role) {
    case "superAdmin":
      return new User({
        name: "超级管理员",
        viewPage: ["首页", "通讯录", "发现页"],
      });
    case "admin":
      return new User({ name: "管理员", viewPage: ["首页", "通讯录"] });
    default:
      throw new Error("参数错误");
  }
};

const superAdmin = UserFactory("superAdmin");
const admin = UserFactory("admin");
