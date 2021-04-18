import React from 'react';
import { PaymentInputsWrapper, usePaymentInputs } from 'react-payment-inputs';
import images from 'react-payment-inputs/images';
import Button from "../components/Button";

 const PaymentInputs = () => {
	const {
		wrapperProps,
		getCardImageProps,
		getCardNumberProps,
		getExpiryDateProps,
		getCVCProps
	} = usePaymentInputs();

	return (
		<div className="payment">
			<h3>Для оплаты ведите данные карты:</h3>
			<PaymentInputsWrapper {...wrapperProps}>
				<svg {...getCardImageProps({ images })} />
				<input {...getCardNumberProps()} />
				<input {...getExpiryDateProps()} />
				<input {...getCVCProps()} />
			</PaymentInputsWrapper>
			<Button
				onClick={(() => console.log("Заказ оплачен"))}
				className="pay-btn"
			>
					<span>Оплатить</span>
			</Button>
		</div>

	);
}
export default PaymentInputs