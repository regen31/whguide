using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Whguide.Models
{
    public class OrePricesViewModel
    {
        public double Arkonor { get; set; }
        public double Bistot { get; set; }
        public double Crokite { get; set; }
        public double DarkOchre { get; set; }
        public double Gneiss { get; set; }
        public double Hedbergite { get; set; }
        public double Hemorphite { get; set; }
        public double Jaspet { get; set; }
        public double Kernite { get; set; }
        public double Mercoxit { get; set; }
        public double Omber { get; set; }
        public double Plagioclase { get; set; }
        public double Pyroxeres { get; set; }
        public double Scordite { get; set; }
        public double Spodumain { get; set; }
        public double Veldspar { get; set; }


        public double ArkonorIskm3 { get; set; }
        public double BistotIskm3 { get; set; }
        public double CrokiteIskm3 { get; set; }
        public double DarkOchreIskm3 { get; set; }
        public double GneissIskm3 { get; set; }
        public double HedbergiteIskm3 { get; set; }
        public double HemorphiteIskm3 { get; set; }
        public double JaspetIskm3 { get; set; }
        public double KerniteIskm3 { get; set; }
        public double MercoxitIskm3 { get; set; }
        public double OmberIskm3 { get; set; }
        public double PlagioclaseIskm3 { get; set; }
        public double PyroxeresIskm3 { get; set; }
        public double ScorditeIskm3 { get; set; }
        public double SpodumainIskm3 { get; set; }
        public double VeldsparIskm3 { get; set; }

        public int ArkonorWeightMultiplier { get; private set; } = 16;
        public int BistotWeightMultiplier { get; private set; } = 16;
        public int CrokiteWeightMultiplier { get; private set; } = 16;
        public int DarkOchreWeightMultiplier { get; private set; } = 8;
        public int GneissWeightMultiplier { get; private set; } = 5;
        public int HedbergiteWeightMultiplier { get; private set; } = 3;
        public int HemorphiteWeightMultiplier { get; private set; } = 3;
        public int JaspetWeightMultiplier { get; private set; } = 2;
        public double KerniteWeightMultiplier { get; private set; } = 1.2;
        public int MercoxitWeightMultiplier { get; private set; } = 40;
        public double OmberWeightMultiplier { get; private set; } = 0.6;
        public double PlagioclaseWeightMultiplier { get; private set; } = 0.35;
        public double PyroxeresWeightMultiplier { get; private set; } = 0.3;
        public double ScorditeWeightMultiplier { get; private set; } = 0.15;
        public int SpodumainWeightMultiplier { get; private set; } = 16;
        public double VeldsparWeightMultiplier { get; private set; } = 0.1;

    
}
}