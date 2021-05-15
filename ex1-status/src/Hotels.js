import HotelItem from './HotelItem';
import test from './test.json'

function Hotels() {

  return (
    <div>
      <h1>Hoteles</h1>
      <ul>
        {test.hotels.map(h =>
          <HotelItem key={h.id} hotel={h} />
        )}
      </ul>
    </div>
  );
}

export default Hotels;
