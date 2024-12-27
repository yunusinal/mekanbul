const FoodAndDrinkList = ({ foodAndDrinkList = [] }) => {
  if (!foodAndDrinkList || foodAndDrinkList.length === 0) {
    return <span>Yiyecek/İçecek bulunmamaktadır.</span>;
  }

  return foodAndDrinkList.map((fan, index) => (
    <span key={index}>
      <span className="label label-warning">{fan}</span>
      &nbsp;
    </span>
  ));
};

export default FoodAndDrinkList;
