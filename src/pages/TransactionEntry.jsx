import HeaderForm from "../components/transaction/HeaderForm";
import DetailBox from "../components/transaction/DetailBox";
import DebitTable from "../components/transaction/tables/DebitTable";
import CreditTable from "../components/transaction/tables/CreditTable";
import DifferenceBar from "../components/transaction/DifferenceBar";
import SearchBar from "../components/transaction/search/SearchBar";
import AccountTable from "../components/transaction/search/AccountTable";
import Actions from "../components/transaction/Actions";

export default function TransactionEntry() {
  return (
    <div className="p-4 space-y-4">

      {/* Top */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <HeaderForm />
        <DetailBox />
      </div>

      {/* Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <DebitTable />
        <CreditTable />
      </div>

      {/* Difference */}
      <DifferenceBar />

      {/* Search + List */}
      <SearchBar />
      <AccountTable />

      {/* Buttons */}
      <Actions />

    </div>
  );
}