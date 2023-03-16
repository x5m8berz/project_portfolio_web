const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {["home", "about", "work", "skills", "testimonial", "contact"].map(
        (item, index) => (
          <a
            href={`#${item}`}
            onClick={() => setToggle(false)}
            key={item + index}
            className="app__navigation-dot"
            style={active === item ? { background: "#313BAC" } : {}}
          />
        )
      )}
    </div>
  );
};

export default NavigationDots;
