describe("calculator", function() {
    describe("addition tests", function() {
        it("should return 42", function() {
            expect(add(20, 22)).toBe(42);
        });
        it("should not return 42 for different number", function() {
            expect(add(5, 5)).toBe(10);
        });
        it("should return an error if both arguments are not numbers", function() {
            expect(add("fish", 5)).toBe("Error!");
        });
        it("should return an error if one argument is null", function() {
            expect(add(42, null)).toBe("Error!");
        });
    });
    describe("Subtraction test", function() {
        it("should return 42", function() {
            expect(sub(84, 42)).toBe(42);
        });
        it("should not return 42 for different numbers", function() {
            expect(sub(22, 20)).toBe(2);
        });
        it("should show an alert an error", function() {
            spyOn(window, "alert");
            sub("fish", 42);
            expect(window.alert).toHaveBeenCalledWith("Error!");
        });
    });
});
