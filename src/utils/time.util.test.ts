import { getSunAngle } from "./time.util";

describe("Time Utility", () => {
  describe("getSunAngle", () => {
    describe("normal time", () => {
      describe("when 6am", () => {
        it("should return angle 0", () => {
          expect(getSunAngle(new Date("2018-12-11T06:00:00Z"))).toEqual(0);
        });
      });
      describe("when 12pm", () => {
        it("should return angle PI / 2", () => {
          expect(getSunAngle(new Date("2018-12-11T12:00:00Z"))).toEqual(Math.PI / 2);
        });
      });
      describe("when 6pm", () => {
        it("should return angle PI", () => {
          expect(getSunAngle(new Date("2018-12-11T18:00:00Z"))).toEqual(Math.PI);
        });
      });
      describe("when 12am", () => {
        it("should return angle 3 PI / 2", () => {
          expect(getSunAngle(new Date("2018-12-11T00:00:00Z"))).toEqual(-Math.PI / 2);
        });
      });
    });
  });
});
