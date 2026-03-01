OLED.init(128, 64)
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    OLED.writeStringNewLine("Temp is " + Environment.dht11value(Environment.DHT11Type.DHT11_temperature_C, DigitalPin.P1))
    OLED.writeStringNewLine("Umid is " + Environment.dht11value(Environment.DHT11Type.DHT11_humidity, DigitalPin.P1))
    basic.pause(1000)
    OLED.clear()
})
