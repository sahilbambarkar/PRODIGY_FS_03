import { Rating } from "@mui/material";

export default function CustomerReviews() {
  const list = [
    {
      name: "Rajesh Kumar",
      message: "Apna Bazar has a great selection of Electronic products.",
      rating: 5,
      imageLink:"https://plus.unsplash.com/premium_photo-1722682239201-21c8173e776b?q=80&w=2043&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Ds",
    },
    {
      name: "Anjali Sharma",
      message: "I love shopping here! They have all my favorite accessories. The staff is always helpful.",
      rating: 4.5,
      imageLink:"https://plus.unsplash.com/premium_photo-1694557636097-5969bae91ba8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
  {
    name: "Vikram Singh",
    message:"A one-stop shop for all my  needs. I appreciate the variety they offer.",
    rating: 4,
    imageLink:"https://images.unsplash.com/photo-1592827095305-68f21edefb82?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
  ];
  return (
    <section className="flex justify-center">
      <div className="w-full p-5 md:max-w-[900px] flex flex-col gap-3">
        <h1 className="text-center font-semibold text-xl">
          Our customers love
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {list?.map((item) => {
            return (
              <div className="flex flex-col gap-2 p-4 rounded-lg justify-center items-center border">
                <img
                  src={item?.imageLink}
                  className="h-32 w-32 rounded-full object-cover"
                  alt=""
                />
                <h1 className="text-sm font-semibold">{item?.name}</h1>
                <Rating
                  size="small"
                  name="customer-rating"
                  defaultValue={item?.rating}
                  precision={item?.rating}
                  readOnly
                />
                <p className="text-sm text-gray-500 text-center">
                  {item?.message}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
