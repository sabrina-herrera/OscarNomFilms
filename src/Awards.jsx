function Awards({ award }) {
    return (
        <>
            <br></br>
            <h5 className={award.winner ? "winner" : "loser"}>{award.awardName}</h5>
            <h6 className={award.winner ? "winner" : "loser"}>{award.awardedTo}</h6>
        </>
    )
}

export default Awards