import TypeWriterEffect from 'react-typewriter-effect';


interface props {
    text: string,
    speed: number,
    cursor: string,
    delay: number,
}
export default function TypeWritter({ text,  speed, delay  }:props) {
  return (
    <div>
      <TypeWriterEffect
        text={text}
        speed={speed}
        deleteSpeed={speed}
        delay={delay}
        cursor="_"
      />
    </div>
  );
}
 
