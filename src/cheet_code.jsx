 //update cart
  const updateCart = (id, newQty) =>
    setCart((prevCart) => {
      return prevCart.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(newQty, 1) } : item,
      );
    });

      //get the cart with useContext
  const { cart, updateCart } = useContext(CartContent);
  //loop through the cart to find the item in the cart
  const cartItem = cart.find((item) => item.id === id);
  //useState to set quantity
  const [quantity, setQuantity] = useState(cartItem.quantity || 1);
  //useEffect to update the cart quantity
  useEffect(() => {
    if (cartItem) {
      setQuantity(cartItem.quantity);
    }
  }, [cartItem]);
  //click handler
  const handleClick = () => {
    let newQty = quantity;
    if (label === '+') {
      newQty = quantity + 1;
    } else if (label === '-') {
      newQty = Math.max(quantity - 1, 1);
    }
    updateCart(id, newQty);
    setQuantity(newQty);
  };