import UserReviewTable from "../../components/table/userModule/UserReviewTable";

function ReviewUser() {
  return (
    <section>
      <div className="flex justify-between">
        <div>
          <h2>All Users</h2>
          <span>More than 400+ new users</span>
        </div>
      </div>

      <div className="my-10">
        <UserReviewTable />
      </div>
    </section>
  );
}

export default ReviewUser;
