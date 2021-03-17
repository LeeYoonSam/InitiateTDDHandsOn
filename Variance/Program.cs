using System;
using System.Linq;

namespace Variance
{
    class Program
    {
        static void Main(string[] args) => Console.WriteLine(args.Length switch
        {
            0 => "입력된 데이터가 없습니다.",
            1 => "데이터가 부족해 분산을 계산할 수 없습니다. 2개 이상의 데이터를 입력해 주세요.",
            _ => GetVarianceOutput(args)
        });

        private static string GetVarianceOutput(string[] args)
        {
            double[] source = ParseArguments(args);
            double mean = CalculateMean(source);
            double sumOfSquares = CalculateSumOfSquare(source, mean);
            double variance = sumOfSquares / (args.Length - 1);
            string output = $"분산: {variance}";
            return output;
        }

        private static double CalculateSumOfSquare(double[] source, double mean)
        {
            return source.Select(x => x - mean)
                         .Select(x => x * x)
                         .Sum();
        }

        private static double CalculateMean(double[] source) => source.Average();

        private static double[] ParseArguments(string[] args) => args.Select(double.Parse).ToArray();
    }
}
