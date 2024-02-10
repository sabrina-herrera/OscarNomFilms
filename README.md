# Oscar Nominated Films 2024
> A catalogue of all the films nominated for an Oscar in 2024 with details such as Director, Cast, Synopsis, and Award Nomninations.
> Check it out [here](https://2024oscarnominatedfilms.netlify.app/).

## General Information
- This React project shows users a list of films nominated for Oscars in 2024 and lists out general information for quick reference.  If a film won an award it was nominated for, the award is shown in **bold**.  The user can also choose hide the winners, which hides the winner styling.
- I chose to do this project because I don't get a chance to sit down and watch a movie often, but I still am interested in who wins what.  This app makes watching the actual show more fun and engaging when I know what these films are about, who's in it, and who directed it.


## Technologies Used
- HTML
- CSS
- React.js
- JavaScript


## Features
- Show/Hide awards won
- Expand/collapse each film card for quicker scrolling


## Design
View FIGMA design file [here](https://www.figma.com/file/25CqMaO9RjFFYqjPlWEAeV/Oscar-Nom-Films?type=design&node-id=0%3A1&mode=design&t=2RsNfBGY8v2JNva1-1).
<img src="public/OSCARNOMDESIGN.svg" width="1280px" />


## Challenges and Future Additions

Challenges:
- I ran into a problem of the film card heading with the mobile view of the film poster, title, and expand/collpase button looking just fine on Chrome Dev Tools, but once actually deployed and on my actual phone, the alignments were off way off.  I reworked the container structure of the film card header and switched my layout code from flex to grid since it seemed like flex was leaving too much room for iterpretation depending on the operating system being used and grid was offering a more direct instruction.  

Future Additions:
- I would like to keep this project up each year and have a carousel feature at the top to flip through each year.  
- In addition to updating each year, I would like to add previous years so eventually it becomes a conside, easily navigatable index of all Oscar Nominated films, details, awards won, and winners.