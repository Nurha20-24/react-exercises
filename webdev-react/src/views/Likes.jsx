import {useUserContext} from '../hooks/contextHooks';
import {useEffect, useState} from 'react';
import {useLikes} from '../hooks/apiHooks';
import Button from '../components/Button';

const Likes = ({mediaId}) => {
  const [likeCount, setLikeCount] = useState(0);
  const [userLikeId, setUserLikeId] = useState(0); // 0 : not liked
  const {user} = useUserContext();

  const {postLike, deleteLike, getLikeCountByMediaId, getUserLike} = useLikes();

  const token = localStorage.getItem('token');

  const fetchUserLike = async () => {
    try {
      const response = await getUserLike(mediaId, token);
      if (response.like_id) {
        setUserLikeId(response.like_id);
      }
    } catch (error) {
      console.log('Fetching like count failed: ', error);
    }
  };

  useEffect(() => {
    const fetchLikeCount = async () => {
      try {
        const response = await getLikeCountByMediaId(mediaId, token);
        setLikeCount(response.count);
      } catch (error) {
        console.log('Fetching like count failed: ', error);
      }
    };

    fetchLikeCount();
  }, [userLikeId]);

  const handleDislike = async () => {
    try {
      await deleteLike(userLikeId, token);
      setUserLikeId(0);
    } catch (error) {
      console.log('delete like failed', error);
    }
  };

  const handleLike = async () => {
    try {
      await postLike(mediaId, token);
      //console.log(response);
      // kutsutaan fetchUserLikea staten päivittämistä varten, jotta saadaa like_id kannasta liken
      // poistamista varten (jos postLike palauttaisi suoraan like_id:n, voitaisiin state päivittää
      // suoraan sitä käyttäen)

      fetchUserLike();
    } catch (error) {
      console.log('Liking media failed: ', error);
    }
  };

  return (
    <>
      <p>Like count: {likeCount}</p>

      {/* TODO: style with tailwind
      TIP: tee uudelleen käytettävä nappi-komponentti joka saa propseina esim. värin klikkifunktion
      */}

      {user && (
        <>
          {userLikeId ? (
            <Button onClick={handleDislike} color="red">
              Dislike
            </Button>
          ) : (
            <Button onClick={handleLike} color="blue">
              Like
            </Button>
          )}
        </>
      )}
    </>
  );
};
export default Likes;
