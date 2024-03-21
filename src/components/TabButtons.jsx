import React from "react";

const TabButtons = ({ activeTab, setActiveTab }) => {
	const buttonsArray = ["All", "Active", "Completed"];
	return (
		<div className="flex items-center gap-4 my-3 mt-1">
			{buttonsArray.map((buttonText, index) => (
				<button
					key={index}
					onClick={() => setActiveTab(index)}
					className={`${
						index === activeTab
							? "bg-orange-500 hover:bg-orange-700"
							: "bg-sky-600 hover:bg-sky-800"
					}  px-6 py-2 text-white rounded-md min-w-32 transition-colors`}>
					{buttonText}
				</button>
			))}
		</div>
	);
};

export default TabButtons;
