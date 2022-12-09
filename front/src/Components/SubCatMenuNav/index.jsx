import './styles.css';

const SubCat = ( {elementCat} ) => {

  if (elementCat.childrens) {
    console.log('si');
  } else {
    console.log('no');
  }

  console.log(elementCat);
  return (
    <div>
      Hola
    </div>
  );
};

export default SubCat;
