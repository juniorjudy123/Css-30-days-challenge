import React from "react"
import profile1 from "../Assets/profile1.avif"
import "./cardComponentStyles.css"
import "../index.css"
const CardComponent = () => {
	return (
		<div className="card-container">
			<div className="card">
				<img src={profile1} className="image"></img>
				<h2>SUE SHEI</h2>
				<h3>Founder</h3>
				<>
					Which is worse,that everyone has his price,or that the price is always
					so low.
				</>
				<div className="icons">
					<img></img>
					<img></img>
					<img></img>
				</div>
			</div>
			<div className="card">
				<img src={profile1} className="image"></img>
				<h2>SUE SHEI</h2>
				<h3>Founder</h3>
				<>
					Which is worse,that everyone has his price,or that the price is always
					so low.
				</>
				<div className="icons">
					<img></img>
					<img></img>
					<img></img>
				</div>
			</div>
			<div className="card">
				<img src={profile1} className="image"></img>
				<h2>SUE SHEI</h2>
				<h3>Founder</h3>
				<>
					Which is worse,that everyone has his price,or that the price is always
					so low.
				</>
				<div className="icons">
					<img></img>
					<img></img>
					<img></img>
				</div>
			</div>
		</div>
	)
}

export default CardComponent
