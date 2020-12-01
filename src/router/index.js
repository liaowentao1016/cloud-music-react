import LQDiscover from "@/pages/discover";
import LQMy from "@/pages/my";
import LQFriends from "@/pages/friends";

const routes = [
  { path: "/", exact: true, component: LQDiscover },
  { path: "/my", component: LQMy },
  { path: "/friends", component: LQFriends }
];

export default routes;
