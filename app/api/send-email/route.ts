import { Resend } from "resend"
import { type NextRequest, NextResponse } from "next/server"

const resend = new Resend("re_TWJXFpMx_JUjemgKkofwuYYkjt467CBpZ")

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { nome, email, whatsapp, interesse } = body

    // Validação básica
    if (!nome || !email || !whatsapp) {
      return NextResponse.json({ error: "Nome, email e WhatsApp são obrigatórios" }, { status: 400 })
    }

    // Email para a Art House
    const emailToArtHouse = await resend.emails.send({
      from: "contato@arthouse.com",
      to: ["arthouse751@hotmail.com"],
      subject: `🎯 Novo Lead - Festival do Papel: ${nome}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
          <div style="background: linear-gradient(135deg, #1B5E3A, #2d7a4f); padding: 30px; border-radius: 15px; text-align: center; margin-bottom: 30px;">
            <h1 style="color: white; margin: 0; font-size: 28px;">🎉 Novo Lead - Festival do Papel!</h1>
            <p style="color: #e8f5e8; margin: 10px 0 0 0; font-size: 16px;">Desconto de 5% solicitado</p>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
            <h2 style="color: #1B5E3A; margin-bottom: 25px; font-size: 24px;">📋 Dados do Cliente</h2>
            
            <div style="margin-bottom: 20px; padding: 15px; background: #f8f9fa; border-radius: 10px; border-left: 4px solid #1B5E3A;">
              <strong style="color: #1B5E3A;">👤 Nome:</strong>
              <p style="margin: 5px 0 0 0; font-size: 18px; color: #333;">${nome}</p>
            </div>
            
            <div style="margin-bottom: 20px; padding: 15px; background: #f8f9fa; border-radius: 10px; border-left: 4px solid #1B5E3A;">
              <strong style="color: #1B5E3A;">📧 Email:</strong>
              <p style="margin: 5px 0 0 0; font-size: 18px; color: #333;">${email}</p>
            </div>
            
            <div style="margin-bottom: 20px; padding: 15px; background: #f8f9fa; border-radius: 10px; border-left: 4px solid #1B5E3A;">
              <strong style="color: #1B5E3A;">📱 WhatsApp:</strong>
              <p style="margin: 5px 0 0 0; font-size: 18px; color: #333;">${whatsapp}</p>
            </div>
            
            ${
              interesse
                ? `
            <div style="margin-bottom: 20px; padding: 15px; background: #f8f9fa; border-radius: 10px; border-left: 4px solid #1B5E3A;">
              <strong style="color: #1B5E3A;">💭 Interesse:</strong>
              <p style="margin: 5px 0 0 0; font-size: 16px; color: #333; line-height: 1.5;">${interesse}</p>
            </div>
            `
                : ""
            }
            
            <div style="text-align: center; margin-top: 30px;">
              <a href="https://wa.me/55${whatsapp.replace(/\D/g, "")}" 
                 style="background: linear-gradient(135deg, #25D366, #128C7E); color: white; padding: 15px 30px; text-decoration: none; border-radius: 25px; font-weight: bold; display: inline-block; font-size: 16px;">
                💬 Entrar em Contato via WhatsApp
              </a>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 20px; color: #666; font-size: 14px;">
            <p>📅 Recebido em: ${new Date().toLocaleString("pt-BR")}</p>
            <p>🎯 Origem: Landing Page - Festival do Papel</p>
          </div>
        </div>
      `,
    })

    // Email de confirmação para o cliente
    const emailToClient = await resend.emails.send({
      from: "contato@arthouse.com",
      to: [email],
      subject: "🎉 Obrigado pelo seu interesse! Seu desconto de 5% está garantido - Art House",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
          <div style="background: linear-gradient(135deg, #1B5E3A, #2d7a4f); padding: 30px; border-radius: 15px; text-align: center; margin-bottom: 30px;">
            <h1 style="color: white; margin: 0; font-size: 28px;">🎉 Obrigado, ${nome}!</h1>
            <p style="color: #e8f5e8; margin: 10px 0 0 0; font-size: 18px;">Seu desconto de 5% está garantido!</p>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
            <h2 style="color: #1B5E3A; margin-bottom: 25px; font-size: 24px;">✨ Festival do Papel - Art House</h2>
            
            <p style="font-size: 16px; line-height: 1.6; color: #333; margin-bottom: 20px;">
              Ficamos muito felizes com seu interesse em nossos papéis de parede! Recebemos seus dados e nossa equipe entrará em contato em breve.
            </p>
            
            <div style="background: linear-gradient(135deg, #FF9500, #ff7b00); padding: 20px; border-radius: 15px; text-align: center; margin: 25px 0;">
              <h3 style="color: white; margin: 0 0 10px 0; font-size: 22px;">🎁 Seu Desconto Especial</h3>
              <p style="color: white; margin: 0; font-size: 18px; font-weight: bold;">5% OFF adicional garantido!</p>
              <p style="color: #fff3e0; margin: 10px 0 0 0; font-size: 14px;">Válido para compras até o final desta semana</p>
            </div>
            
            <div style="background: #f8f9fa; padding: 20px; border-radius: 15px; margin: 25px 0;">
              <h3 style="color: #1B5E3A; margin: 0 0 15px 0; font-size: 20px;">📍 Visite Nossa Loja</h3>
              <p style="margin: 5px 0; color: #333;"><strong>Endereço:</strong> CLS 311, Bloco C, Loja 29, Asa Sul, Brasília - DF</p>
              <p style="margin: 5px 0; color: #333;"><strong>Telefone:</strong> (61) 98679-2057</p>
              <p style="margin: 5px 0; color: #333;"><strong>Email:</strong> arthouse751@hotmail.com</p>
            </div>
            
            <div style="text-align: center; margin-top: 30px;">
              <a href="https://wa.me/5561986792057" 
                 style="background: linear-gradient(135deg, #25D366, #128C7E); color: white; padding: 15px 30px; text-decoration: none; border-radius: 25px; font-weight: bold; display: inline-block; font-size: 16px; margin: 10px;">
                💬 Falar no WhatsApp
              </a>
              <a href="https://arthousepapeldeparede.com.br/" 
                 style="background: linear-gradient(135deg, #1B5E3A, #2d7a4f); color: white; padding: 15px 30px; text-decoration: none; border-radius: 25px; font-weight: bold; display: inline-block; font-size: 16px; margin: 10px;">
                🌐 Visitar Site
              </a>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 20px; color: #666; font-size: 14px;">
            <p>🏆 25 anos transformando ambientes em Brasília</p>
            <p>⭐ Avaliação 5.0/5 no Google - Mais de 100 clientes satisfeitos</p>
          </div>
        </div>
      `,
    })

    return NextResponse.json({
      success: true,
      message: "Emails enviados com sucesso!",
      emailIds: {
        toArtHouse: emailToArtHouse.data?.id,
        toClient: emailToClient.data?.id,
      },
    })
  } catch (error) {
    console.error("Erro ao enviar email:", error)
    return NextResponse.json({ error: "Erro interno do servidor" }, { status: 500 })
  }
}
