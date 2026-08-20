// ============================================================================
// Auditorías Saona — credenciales de Supabase (compartidas por Auditorias_Saona.html
// e Historico_Auditorias_Saona.html)
//
// 1. Crea un proyecto en supabase.com (o usa uno existente).
// 2. SQL Editor → New query → pega todo el contenido de sql/schema.sql → Run.
// 3. Project Settings → API → copia la "Project URL" y la clave "anon public"
//    (es pública, pensada para el navegador — el control de acceso real lo
//    hace RLS, ya configurado en schema.sql).
// 4. Sustituye los dos placeholders de abajo.
//
// Mientras tengan los placeholders originales, la app funciona en modo
// "solo Word": puedes generar el informe, pero no se guarda ni se lee
// histórico.
// ============================================================================
const SUPABASE_URL = "https://cdrwldqasbpyoueglvxm.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_7-NUFXW78EqNF6O5iCziJA_AZcxQTNP";
const SUPABASE_CONFIGURED = !SUPABASE_URL.includes("xxxxx") && !SUPABASE_ANON_KEY.includes("...");
