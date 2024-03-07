function Awards({ award }) {
    return (
        <>
            <br></br>
            <h4 className={award.winner ? "winner" : "loser"}>{award.awardName}</h4>
            <h5 className={award.winner ? "winner" : "loser"}>{award.awardedTo}</h5>
        </>
    )
}

export default Awards