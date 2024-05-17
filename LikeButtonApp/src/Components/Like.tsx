import { useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";
import styles from "./Like.module.css"




const Like: React.FC = () => {
    const [fill, setFill] = useState(false)

const changeFill = () => {
    setFill(!fill);
}
  return (
    <>
    <div className={styles.buttonContainer}>
    <h1>LIKE BUTTON</h1>
    <button className={styles.button} onClick={changeFill}>
        {
            fill ? <AiFillLike /> : <AiOutlineLike />
        }
    </button>

    </div>

    
    </>
  )
}

export default Like