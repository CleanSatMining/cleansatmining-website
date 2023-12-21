import { NextApiRequest, NextApiResponse } from 'next'
import { isValidSignatureServer } from '@/components/utils/auth'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  console.log('isValidSignature')
  if (req.method !== 'POST') {
    return res.status(405).end() // Méthode non autorisée
  }

  try {
    const { userAddress, message, signature } = req.body

    // Vérifier la signature côté serveur
    const isValid = await isValidSignatureServer(
      message,
      signature,
      userAddress,
    )

    if (isValid) {
      return res
        .status(200)
        .json({ message: 'Signature valide. Accès autorisé.' })
    } else {
      return res
        .status(401)
        .json({ message: 'Signature invalide. Accès refusé.' })
    }
  } catch (error) {
    console.error('Erreur lors de la vérification de la signature:', error)
    return res.status(500).json({ message: 'Erreur serveur' })
  }
}
