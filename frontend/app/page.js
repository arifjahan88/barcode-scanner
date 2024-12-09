import { Board } from "@/components/Board/Board";
import { PrivateRoute } from "@/components/routes/PrivateRoute";

export default function Home() {
  return (
    <>
      <PrivateRoute>
        <Board />
      </PrivateRoute>
    </>
  );
}
