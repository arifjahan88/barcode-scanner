import BarcodeScanner from "@/components/Barcode/BarcCodeDecode";
import { Board } from "@/components/Board/Board";

export default function Home() {
  return (
    <>
      <BarcodeScanner />
      <Board />
    </>
  );
}
