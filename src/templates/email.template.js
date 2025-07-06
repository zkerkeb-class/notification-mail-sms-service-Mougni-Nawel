const generateWelcomeTemplate = (firstname, lastname) => {
  return `
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bienvenue sur ContractAI</title>
    <!--[if mso]>
    <style>
        .header-title { font-size:32px !important; }
        .feature-box { width:250px !important; }
    </style>
    <![endif]-->
</head>
<body style="margin:0; padding:0; font-family: 'Arial', sans-serif;">
    <!--[if mso]>
    <div style="font-family:'Arial', sans-serif;">
    <![endif]-->
    
    <!-- Container principal -->
    <table width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width:650px; margin:0 auto;">
        <tr>
            <td style="padding:40px 0; background:#0a1f44; text-align:center; border-bottom:4px solid #2c56cc;">
                <!-- Logo -->
                <table align="center" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                        <td style="background:#ffffff; width:100px; height:100px; border-radius:50%; border:2px solid #d6e0ff; text-align:center;">
                            <span style="color:#1a3a8f; font-size:48px;">⚖</span>
                        </td>
                    </tr>
                </table>
                
                <!-- Titre -->
                <h1 class="header-title" style="color:#ffffff; font-family:'Times New Roman', serif; font-size:44px; margin:20px 0 10px; font-weight:bold;">
                    ContractAI
                </h1>
                
                <!-- Séparateur -->
                <table align="center" width="80" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                        <td height="2" style="background:linear-gradient(to right, transparent, #ffffff, transparent);"></td>
                    </tr>
                </table>
                
                <!-- Sous-titre -->
                <p style="color:#c7d4ff; font-size:18px; font-style:italic; margin:20px 0 0;">
                    Excellence juridique par l'intelligence artificielle
                </p>
            </td>
        </tr>
        
        <!-- Contenu -->
        <tr>
            <td style="padding:40px 30px; background:#ffffff;">
                <!-- Titre bienvenue -->
                <h2 style="color:#0a1f44; font-family:'Times New Roman', serif; font-size:32px; text-align:center; margin:0 0 20px;">
                    Bienvenue, ${firstname} ${lastname}
                </h2>
                
                <!-- Séparateur -->
                <table align="center" width="100" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                        <td height="3" style="background:#2c56cc;"></td>
                    </tr>
                </table>
                
                <!-- Description -->
                <p style="color:#4a5568; font-size:18px; text-align:center; max-width:480px; margin:20px auto 40px;">
                    Découvrez une approche révolutionnaire de l'analyse contractuelle, conçue pour les professionnels du droit les plus exigeants
                </p>
                
                <!-- Features - 2 colonnes -->
                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                        <td valign="top" width="50%" style="padding:0 10px 20px 0;">
                            <table class="feature-box" width="100%" border="0" cellspacing="0" cellpadding="20" style="background:#ffffff; border:1px solid #e8edf5; border-radius:8px;">
                                <tr>
                                    <td style="text-align:center;">
                                        <div style="background:#1a3a8f; width:60px; height:60px; border-radius:8px; margin:0 auto 20px; text-align:center; line-height:60px;">
                                            <span style="color:#ffffff; font-size:24px;">🔍</span>
                                        </div>
                                        <h3 style="color:#0a1f44; font-family:'Times New Roman', serif; font-size:20px; margin:0 0 10px;">
                                            Analyse Experte
                                        </h3>
                                        <p style="color:#64748b; font-size:15px; margin:0;">
                                            Identification précise des clauses critiques et évaluation sophistiquée des risques juridiques
                                        </p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                        <td valign="top" width="50%" style="padding:0 0 20px 10px;">
                            <table class="feature-box" width="100%" border="0" cellspacing="0" cellpadding="20" style="background:#ffffff; border:1px solid #e8edf5; border-radius:8px;">
                                <tr>
                                    <td style="text-align:center;">
                                        <div style="background:#1a3a8f; width:60px; height:60px; border-radius:8px; margin:0 auto 20px; text-align:center; line-height:60px;">
                                            <span style="color:#ffffff; font-size:24px;">💡</span>
                                        </div>
                                        <h3 style="color:#0a1f44; font-family:'Times New Roman', serif; font-size:20px; margin:0 0 10px;">
                                            Conseil Stratégique
                                        </h3>
                                        <p style="color:#64748b; font-size:15px; margin:0;">
                                            Recommandations personnalisées pour optimiser la protection juridique de vos intérêts
                                        </p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <!-- Deuxième ligne de features -->
                    <tr>
                        <td valign="top" width="50%" style="padding:0 10px 0 0;">
                            <table class="feature-box" width="100%" border="0" cellspacing="0" cellpadding="20" style="background:#ffffff; border:1px solid #e8edf5; border-radius:8px;">
                                <tr>
                                    <td style="text-align:center;">
                                        <div style="background:#1a3a8f; width:60px; height:60px; border-radius:8px; margin:0 auto 20px; text-align:center; line-height:60px;">
                                            <span style="color:#ffffff; font-size:24px;">⚡</span>
                                        </div>
                                        <h3 style="color:#0a1f44; font-family:'Times New Roman', serif; font-size:20px; margin:0 0 10px;">
                                            Efficacité Premium
                                        </h3>
                                        <p style="color:#64748b; font-size:15px; margin:0;">
                                            Interface intuitive et workflow optimisé pour une productivité maximale
                                        </p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                        <td valign="top" width="50%" style="padding:0 0 0 10px;">
                            <table class="feature-box" width="100%" border="0" cellspacing="0" cellpadding="20" style="background:#ffffff; border:1px solid #e8edf5; border-radius:8px;">
                                <tr>
                                    <td style="text-align:center;">
                                        <div style="background:#1a3a8f; width:60px; height:60px; border-radius:8px; margin:0 auto 20px; text-align:center; line-height:60px;">
                                            <span style="color:#ffffff; font-size:24px;">🔒</span>
                                        </div>
                                        <h3 style="color:#0a1f44; font-family:'Times New Roman', serif; font-size:20px; margin:0 0 10px;">
                                            Confidentialité Absolue
                                        </h3>
                                        <p style="color:#64748b; font-size:15px; margin:0;">
                                            Sécurité renforcée et conformité aux standards les plus stricts du secteur juridique
                                        </p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
                
                <!-- Bouton CTA -->
                <table align="center" border="0" cellspacing="0" cellpadding="0" style="margin:40px auto;">
                    <tr>
                        <td align="center" style="background:#1a3a8f; border-radius:6px;">
                            <a href="${process.env.FRONTEND_URL}/upload" style="color:#ffffff; text-decoration:none; display:inline-block; padding:15px 40px; font-size:16px; font-weight:bold;">
                                Commencer l'analyse
                            </a>
                        </td>
                    </tr>
                </table>
                
                <!-- Section support -->
                <table width="100%" border="0" cellspacing="0" cellpadding="30" style="background:#f0f4ff; border-radius:8px; border:1px solid #e0e7ff; margin-top:40px;">
                    <tr>
                        <td style="text-align:center;">
                            <div style="background:#1a3a8f; width:80px; height:80px; border-radius:50%; margin:0 auto 20px; text-align:center; line-height:80px;">
                                <span style="color:#ffffff; font-size:32px;">🏛</span>
                            </div>
                            <h4 style="color:#0a1f44; font-family:'Times New Roman', serif; font-size:24px; margin:0 0 15px;">
                                Accompagnement Expert
                            </h4>
                            <p style="color:#4a5568; font-size:16px; margin:0; max-width:400px; margin:0 auto;">
                                Notre équipe de juristes spécialisés vous accompagne dans l'optimisation de vos analyses contractuelles
                            </p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
        
        <!-- Footer -->
        <tr>
            <td style="padding:30px; background:#0a1f44; text-align:center;">
                <p style="color:#ffffff; font-family:'Times New Roman', serif; font-size:18px; margin:0 0 15px;">
                    ContractAI
                </p>
                <table align="center" width="50" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                        <td height="2" style="background:rgba(255,255,255,0.3);"></td>
                    </tr>
                </table>
                <p style="color:#a3b2d8; font-size:13px; margin:15px 0 0;">
                    © ${new Date().getFullYear()} • Tous droits réservés • Technologie juridique de pointe
                </p>
            </td>
        </tr>
    </table>
    
    <!--[if mso]>
    </div>
    <![endif]-->
</body>
</html>
  `
}

module.exports = { generateWelcomeTemplate };
