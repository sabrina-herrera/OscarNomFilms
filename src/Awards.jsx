function Awards({ award }) {
    return (
        <>
            <p className={award.winner ? "winner" : "loser"}>{award.awardName}</p>
            <p className={award.winner ? "winner" : "loser"}>{award.awardedTo}</p>
        </>
    )
}

export default Awards