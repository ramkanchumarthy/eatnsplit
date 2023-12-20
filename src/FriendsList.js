import Friend from "./Friend";

export default function FriendsList({ friends, onSelection, selectedfriend }) {
  // const friends = initialFriends;
  return (
    <div>
      <ul>
        {friends.map((friend) => (
          <Friend
            friend={friend}
            key={friend.id}
            onSelection={onSelection}
            selectedfriend={selectedfriend}
          />
        ))}
      </ul>
    </div>
  );
}
