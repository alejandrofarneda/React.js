function HotelItem({ hotel }) {

  return (
    <li>
      {hotel.name} ({hotel.city})
    </li>
  );
}

export default HotelItem;
