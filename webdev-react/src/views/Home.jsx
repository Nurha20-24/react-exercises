import MediaRow from '../components/MediaRow';
import SingleView from '../components/SingleView';
import {useState} from 'react';
import {useMedia} from '../hooks/apiHooks';

const Home = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  // ylempi komponentti kuljettaa datan ja funktiot alas lapsikomponenteille
  const {mediaArray, deleteMedia, modifyMedia} = useMedia();
  return (
    <div className="p-4 max-w-7xl mx-auto">
      <SingleView item={selectedItem} setSelectedItem={setSelectedItem} />
      <h2 className="text-2xl font-bold mb-6 text-gray-800">My Media</h2>

      <div className="bg-white shadow-sm rounded-lg p-6">
        <table className="w-full text-sm">
          <thead className="bg-gray-200 text-sm uppercase ">
            <tr>
              <th className="px-4 py-2">Thumbnail</th>
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2">Description</th>
              <th className="px-4 py-2">Created</th>
              <th className="px-4 py-2">Size</th>
              <th className="px-4 py-2">Type</th>
              <th className="px-4 py-2">View</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {mediaArray.map((item) => (
              <MediaRow
                key={item.media_id}
                item={item}
                setSelectedItem={setSelectedItem}
                deleteMedia={deleteMedia}
                modifyMedia={modifyMedia}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Home;
