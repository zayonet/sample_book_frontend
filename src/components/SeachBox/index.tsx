import React from "react";

import { Container } from "./style";

interface ISearchBooks{
    wordEntered: string;
    placeholder: string;
    onChange(event: React.ChangeEvent<HTMLInputElement>): void | undefined,
    /* byAuthor: string;
    byDate: string;
    byAmount: string */
}

const SeachBox: React.FC<ISearchBooks> = ({wordEntered, placeholder, onChange}) => {
    return (
        <Container>
            <div className="search_elem">
                <input className="input_tag" type="text" value={wordEntered} placeholder={placeholder} onChange={onChange} />
            </div>
        </Container>
    )
}

export default SeachBox;