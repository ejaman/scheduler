import fbApp from "./firebaseAuth";

class FeedRepository {
  // data가 업데이트 될 때마다 하고 싶은 것을 받아옴
  syncFeed(userId, onUpdate) {
    const ref = fbApp.database().ref(`${userId}/feeds`);
    ref.on("value", (snapshot) => {
      const value = snapshot.val(); //check snapshot
      value && onUpdate(value);
    });
    return () => ref.off(); // 계속 싱크되는 걸 끄는 함수, 즉 on을 끄고 싶을면 이 함수를 호출
  }

  syncSchedule(userId, onUpdate) {
    const ref = fbApp.database().ref(`${userId}/schedules`);
    ref.on("value", (snapshot) => {
      const value = snapshot.val(); //check snapshot
      value && onUpdate(value);
    });
    return () => ref.off(); // 계속 싱크되는 걸 끄는 함수, 즉 on을 끄고 싶을면 이 함수를 호출
  }

  saveDiary(userId, feed) {
    fbApp.database().ref(`${userId}/feeds/${feed.id}`).set(feed);
  }
  removeDiary(userId, feed) {
    fbApp.database().ref(`${userId}/feeds/${feed.id}`).remove();
  }

  saveSchedule(userId, schedule) {
    fbApp.database().ref(`${userId}/schedules/${schedule.id}`).set(schedule);
  }
  removeSchedule(userId, schedule) {
    fbApp.database().ref(`${userId}/schedules/${schedule.id}`).remove();
  }
}
export default FeedRepository;
