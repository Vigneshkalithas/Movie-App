import { Msg } from "./Msg";

export function UserList() {

  const users = [{
    name: "Vignesh kalithas",
    pic: "https://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png"
  },
  {
    name: "Lakshmiprabha Kalithas",
    pic: "https://cdn-icons-png.flaticon.com/512/219/219990.png"
  },
  {
    name: "Kalithas Ramasamy",
    pic: "https://p8cdn4static.sharpschool.com/UserFiles/Servers/Server_416292/Image/Profile%20pic.png"
  },
  ];

  return (
    <div className="user-detail">
      {users.map((user) => (
        <Msg name={user.name} pic={user.pic} />
      ))}

    </div>
  );
}
