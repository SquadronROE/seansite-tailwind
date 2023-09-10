import {
  StarIcon,
  ArrowPathIcon,
  FingerPrintIcon,
} from "@heroicons/react/24/solid";

export const featuresData = [
  {
    color: "blue",
    title: "Thoughtful scope",
    icon: StarIcon,
    description:
      "Risk-based testing is just the start. What features are used most often and are easiest to automate testing for?",
  },
  {
    color: "red",
    title: "Fast resolution",
    icon: ArrowPathIcon,
    description:
      "From knowing a test failed to implementing a fix, troubleshooting must be fast.",
  },
  {
    color: "teal",
    title: "Test data management",
    icon: FingerPrintIcon,
    description:
      "Ensure test data is reliable, realistic and robust. Coordination between developers and clear articulation of mocking early reduces total cost.",
  },
];

export default featuresData;
