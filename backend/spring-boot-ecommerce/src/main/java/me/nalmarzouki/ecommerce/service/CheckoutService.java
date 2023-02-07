package me.nalmarzouki.ecommerce.service;

import me.nalmarzouki.ecommerce.dto.Purchase;
import me.nalmarzouki.ecommerce.dto.PurchaseResponse;

public interface CheckoutService {

    PurchaseResponse placeOrder(Purchase purchase);
}
