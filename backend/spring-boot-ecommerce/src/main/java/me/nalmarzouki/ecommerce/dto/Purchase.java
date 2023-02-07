package me.nalmarzouki.ecommerce.dto;

import me.nalmarzouki.ecommerce.entity.Address;
import me.nalmarzouki.ecommerce.entity.Customer;
import me.nalmarzouki.ecommerce.entity.Order;
import me.nalmarzouki.ecommerce.entity.OrderItem;
import lombok.Data;

import java.util.Set;

@Data
public class Purchase {

    private Customer customer;
    private Address shippingAddress;
    private Address billingAddress;
    private Order order;
    private Set<OrderItem> orderItems;

}
