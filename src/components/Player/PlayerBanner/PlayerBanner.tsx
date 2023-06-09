import {Player} from "../Player";

type PlayerBannerProps = {
    player: Player
    index?: number
    onDelete: (player: Player) => void
}

const PlayerBanner = ({player, index, onDelete}: PlayerBannerProps) => {
    return <div>
        <>
            tu sobie zrobisz plakietkę playera czyli wyciągasz z playera wszystkie jego propsy avatar itd.
            np. {player.avatar}
            np. {player.name}

            dodatkowo jeżeli jest zdefiniowany onDelete to pokazujesz przycisk do usunięcia i po kliknieciu wywałujesz on delete z aktualnym playerem
            {onDelete ? <button onClick={() => onDelete(player)}>x</button> : null}

            jezeli index to wyswietlasz numerek itd
            {index ? <span>{index}</span> : null}
        </>
    </div>
}

export default PlayerBanner;

