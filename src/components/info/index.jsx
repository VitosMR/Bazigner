import React from "react";
import '../info/style.css';
const Info =()=>{
    return(
      <div className="containerinfo1">
        <h1 className="summarise">
        summarise the feature
        </h1>
            <h3 className="summarise2">
            summarise what your product is all about
            </h3>
            <div className="card">
                <img src="data:image/png;base64,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" alt="" />
                <h1>
                 ATTRACTIVE LAYOUT
                </h1>
                <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab illum sed, natus possimus praesentium ratione reprehenderit consequatur voluptatibus pariatur deserunt, error unde ipsa maxime obcaecati vel optio corrupti maiores. Quasi.

                </p>
            </div>
            <div className="card">
                <img src="https://img.freepik.com/free-photo/isolated-phone-grey-background_125540-777.jpg" alt="" />
                <h1>
                    FRESH DESIGN
                </h1>
                <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab illum sed, natus possimus praesentium ratione reprehenderit consequatur voluptatibus pariatur deserunt, error unde ipsa maxime obcaecati vel optio corrupti maiores. Quasi.
                    
                </p>
            </div>
            <div className="card">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANwAAADlCAMAAAAP8WnWAAAAllBMVEUArEdbuXT///8Agy0Arkdeu3cAqT8eiz4fkkOBypUGgi4LhTNXuHH6/fsTsVKBx5MApzRNtGlSvXRXv3hcwHxivHqg1K1RtmzP6dUxtV8AfybT7txXs3AApjIltFqOzZ7b7uCx27xrwILj8uft9++p2LWa0ad5xIxux4tEuWoymU9DpF6V1akOjTgZmUW84MQdp04mpVNWSUz5AAAD5UlEQVR4nO3di1LiMBTG8VggyBJq6y7lJpciiqjr5f1fbltxdWdngebETc7JfP8n6G9OGtqhUJU4tSqX6+EZk4brZbn68+iUg2xTnOXGhCb9mTG5KQZfgStyVrDfjfLCGXfdGYVmHGq03rjhxnlowpFMvnLBsbZV7XU03DVzW6XbkHFsdv+DmTUVV7DdSz4b3dBwG/aLsi4fkHC3LD/f/s7ckHACFuVbFNxYCC5fEXCFiFVZrcuSgNtKwS0JuE7oo27amoATMrjq/i5m3BlwwDEMOOAYBhxwDAMOOIYBBxzDgAOOYcABxzDggGMYcMAxDDjgGEbBdbz1lbjVzd1ukZ6q66v7hys33yducLvItNbqZN9avppOuw8uvA/cY9bA5RlX+1oPdN07bjPJGtI84ype1xE3azw2/7iqKxfcrPnYguCouhq3sbKFwBF1NW5isSYD4bqkXUXV+6SVLQhuStozVTKY29mC4Fot2uR6dosyEG56TxidSixpoSbXJzw0rsaWZ1wo3JSwYapH21UZCkfYUtRQCK5FOOnUwtYWCkf4qLOmAfc/6lvbgAMOOOCAAw444IADDjjggAMOOOCAAw444IADDjjggAMOOOCAAw444IADDjjggAMOOOCAAw444IADDjjggHuvLwU3JOC6UnBbAu6nEJy5tbe1n4TgRs8E3IsQXH5tj1NpmB3FGre2/61xsHVpixuVFFyg0VnjEhKu/TTlj8ufaTiVnrPHmW1CxAVZmFY40xmQce0X/zobnDFvb32k4Sqd94swC5wZ7t9oScTV553nXaUxzuTL93/EIuNU+7XrldcQZ/L1OHHGqXb6eu7x3q5vGjTKLz5oTriK1168Pt2fe+riZMty9vnuX1fcHuipzP4vD51x3soGpzXAcQw44BgGHHAMAw44hgEHHMOAA45hwAHHMOCAYxhwwDEMOOAYBhxwDNMx41JrmxycvowZ9xgxLptFjCOccmJwWRExjvDiTTG4rIwXp39QbDJwOrW/OpGC0+mGZJOA0xOijT9Oz7dEGnucznaEKxMHnPZVNlc9BxoFp3c9Py3LlYuMgqPceoQqZpstTpTNEifLZocTZrPCSbPZ4MTZLHDybM1x+nvoQ7Uv4rk1xkmcW1OcyLk1xMmcWzOc0Lk1wkmdWxOc2Lk1wMmd22mc4LmdxEme2ymc6LmdwMme23GcdNsxHPGrFUZFPLcjOPlzO4yLYG4HcTHM7RAuirkdwMUxt3/jYrElahGvLVF3Olpbop6zaG2JStJobRVuPI/VVuGScv5x2mVR2WpcsppkNU/rjPA0Kuf2j/qNezuVXhbUJ3W49guQC0smJBShqwAAAABJRU5ErkJggg==" alt="" />
                <h1>
                    MULTIPURPOSE
                </h1>
                <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab illum sed, natus possimus praesentium ratione reprehenderit consequatur voluptatibus pariatur deserunt, error unde ipsa maxime obcaecati vel optio corrupti maiores. Quasi.
                    
                </p>
            </div>
            <div className="card">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuzX6UIAvN5vd93pBQQjPeLOW3p6jKCcaisw&usqp=CAU" alt="" />
                <h1>
                    EASY TO CUSTOMIZE
                </h1>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab illum sed, natus possimus praesentium ratione reprehenderit consequatur voluptatibus pariatur deserunt, error unde ipsa maxime obcaecati vel optio corrupti maiores. Quasi.
                </p>
            </div>
      </div>  
    );
}
export default Info;