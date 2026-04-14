const e = React.createElement;

function genCode() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let code = "";
  for (let i = 0; i < 8; i++) {
    code += chars[Math.floor(Math.random() * chars.length)];
  }
  return code;
}

function App() {
  const [page, setPage] = React.useState("home");
  const [user, setUser] = React.useState(null);
  const [code, setCode] = React.useState("");

  function login() {
    setUser({ name: "Іван" });
    setCode(genCode());
    setPage("dashboard");
  }

  if (page === "home") {
    return e("div", null,
      e("h1", null, "💧 AQUAWASH"),
      e("p", null, "Підписка на автомийку"),
      e("button", { className: "primary", onClick: () => setPage("login") }, "Увійти"),
      e("button", { className: "gold", onClick: () => setPage("register") }, "Реєстрація")
    );
  }

  if (page === "login") {
    return e("div", { className: "card" },
      e("h2", null, "Вхід"),
      e("button", { className: "primary", onClick: login }, "Увійти як тест"),
      e("br"),
      e("button", { className: "ghost", onClick: () => setPage("home") }, "Назад")
    );
  }

  if (page === "register") {
    return e("div", { className: "card" },
      e("h2", null, "Реєстрація"),
      e("p", null, "Демо версія"),
      e("button", { className: "ghost", onClick: () => setPage("home") }, "Назад")
    );
  }

  if (page === "dashboard") {
    return e("div", { className: "card" },
      e("h2", null, "Привіт, " + user.name),
      e("p", null, "Твій код:"),
      e("div", { className: "code" }, code),
      e("button", { className: "ghost", onClick: () => setPage("home") }, "Вийти")
    );
  }
}

ReactDOM.createRoot(document.getElementById("root")).render(e(App));
