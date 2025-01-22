# Dynamic Seat Booking System

A user-friendly application for interactive seat selection and ticket booking, featuring real-time updates, validation checks, and discount application.

## Features

### 1. Interactive Seat Selection
- Select up to 4 seats dynamically with real-time updates.
- Selected seats are visually highlighted and added to the summary list.

### 2. Real-Time Pricing
- Automatically calculates and updates the total ticket price and grand total as seats are selected.
- Displays a detailed price breakdown for each selected seat.

### 3. Discount Coupons
- Apply valid discount codes (e.g., `NEW15`, `Couple 20`) to reduce the total price.
- Discount is calculated and applied dynamically, reflecting immediately in the pricing summary.

### 4. Seat Availability Management
- Tracks and updates the number of available seats dynamically as users select them.
- Ensures users see the current availability in real time.

### 5. Phone Number Validation
- The "Next" button is **initially disabled** and becomes active only when a valid phone number is entered.
- Invalid phone numbers display an error message, and the button remains disabled.

### 6. Apply Button Activation
- The "Apply" button for discounts is activated only when specific conditions (e.g., selecting 4 seats) are met.
- Prevents premature or invalid discount application.

---

## How It Works
1. **Select Seats**:
   - Click on available seats to select them.
   - A maximum of 4 seats can be selected.
   
2. **View Summary**:
   - See seat details (number, class, price) added to the price list.
   - Total and grand total update dynamically.

3. **Enter Phone Number**:
   - Input your phone number. The "Next" button activates only when a valid phone number is entered.

4. **Apply Discount**:
   - Enter a valid coupon code to get a discount. The total price adjusts automatically.

5. **Complete Booking**:
   - Once all conditions are met, proceed to finalize your booking.

---

## Technologies Used
- **HTML**: For the structure of the user interface.
- **CSS**: For styling and visual feedback.
- **JavaScript**: For interactivity, real-time updates, and validation.

---

## Setup and Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Md-Shakhawat-Hosen/e-ticket.git
