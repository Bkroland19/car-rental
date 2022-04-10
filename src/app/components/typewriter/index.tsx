import TypeWriterEffect from 'react-typewriter-effect';
import styled from 'styled-components';
import tw from 'twin.macro';
import { ITypewritter } from '../../../typings/typewritter';


interface IProps extends ITypewritter{

}



const Description = styled.p`
${tw`
  text-xs
  lg:text-sm
  xl:text-lg
  sm:max-h-full
  overflow-hidden
  max-h-12
  text-gray-800
`};
`;
export default function TypeWritter(props: IProps) {
    const {
        text,
        delay,
        cursor,
        speed,
        deleteSpeed,
      } = props;
  return (
    <div>
      <TypeWriterEffect
        text={text}
        speed={speed}
        deleteSpeed={deleteSpeed}
        delay={delay}
        cursor="_"
      />
    </div>
  );
}
 
