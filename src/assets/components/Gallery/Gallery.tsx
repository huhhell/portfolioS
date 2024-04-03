import styled from "styled-components";
import {ProjectImage} from "../../data/images.ts";
import {useState} from "react";

interface Props {
    images: ProjectImage[],
}

export default function Gallery({images}: Props) {
    const [activeImgId,setActiveImgId] = useState(0);

    function changeActiveImageId(id: number) {
        setActiveImgId(id);
    }

    return <Container>
        <MainImgCnt><MainImg src={images[activeImgId].img}/></MainImgCnt>
        <OptionsCnt>
            {images.map(i => i.id === activeImgId ? <> </> : <OptionsImgCnt key={i.id} onClick={() => changeActiveImageId(i.id)}>
                <OptionImg src={i.img} alt={i.alt} />
            </OptionsImgCnt>)}
        </OptionsCnt>
    </Container>
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
`

const MainImgCnt = styled.div`
    flex: 0 0 auto;
    width: 40vw;
    aspect-ratio: 5/3;
    overflow: hidden;

`

const MainImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const OptionsCnt = styled.div`
    display: flex;
    justify-content: center;
    gap: 15px;
`

const OptionsImgCnt = styled.div`
    width: 100px;
    height: 100px;
    overflow: hidden;
    
`

const OptionImg = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
`
