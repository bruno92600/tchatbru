import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore"
import { useChatStore } from "../../lib/chatStore"
import { auth, db } from "../../lib/firebase"
import { useUserStore } from "../../lib/userStore"
import "./detail.css"

const Detail = () => {

  const { chatId, user, isCurrentUserBlocked, isReceiverBlocked, changeBlock, resetChat } =
    useChatStore();
  const { currentUser } = useUserStore();

  const handleBlock = async () => {
    if (!user) return;

    const userDocRef = doc(db, "users", currentUser.id);

    try {
      await updateDoc(userDocRef, {
        blocked: isReceiverBlocked ? arrayRemove(user.id) : arrayUnion(user.id),
      });
      changeBlock();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="detail">
      <div className="user">
        <img src={user?.avatar || "./avatar.png"} alt="" />
        <h2>{user?.username}</h2>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Paramètres</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Paramètres</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privé & aides</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Photos partagées</span>
            <img src="./arrowDown.png" alt="" />
          </div>
          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
              <img src="./favicon.png" alt="" />
              <span>photo_2024_2.png</span>
              </div>
              <img src="./download.png" alt="" className="icons" />
            </div>
            <div className="photoItem">
              <div className="photoDetail">
              <img src="./favicon.png" alt="" />
              <span>photo_2024_2.png</span>
              </div>
              <img src="./download.png" alt="" className="icons" />
            </div>
            <div className="photoItem">
              <div className="photoDetail">
              <img src="./favicon.png" alt="" />
              <span>photo_2024_2.png</span>
              </div>
              <img src="./download.png" alt="" className="icons" />
            </div>
            <div className="photoItem">
              <div className="photoDetail">
              <img src="./favicon.png" alt="" />
              <span>photo_2024_2.png</span>
              </div>
              <img src="./download.png" alt="" className="icons" />
            </div>
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Fichiers partagés</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <button onClick={handleBlock}>
        {isCurrentUserBlocked
            ? "Tu es bloqué"
            : isReceiverBlocked
            ? "utilisateur bloqué"
            : "Bloqué utilisateur"}
        </button>
        <button className="logout" onClick={() => auth.signOut()}>Se déconnecter</button>
      </div>
    </div>
  )
}

export default Detail